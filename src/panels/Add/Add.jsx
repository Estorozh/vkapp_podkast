import React, {useEffect, useRef, useState} from "react";
import { PanelHeader, Button, Panel, Card, CardGrid, Input, FormLayout, FormLayoutGroup, Textarea, Checkbox, Separator, Title, Header, Div, PanelHeaderButton, Text } from "@vkontakte/vkui";
import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';
import Icon16Chevron from '@vkontakte/icons/dist/16/chevron';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28PodcastOutline from '@vkontakte/icons/dist/28/podcast_outline';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { platform, IOS } from '@vkontakte/vkui';
import "./style.css";
import { ROUTES } from "../../const";


const osName = platform();

const Add = ({id, go, podkastFile, setPodkastFile}) => {
    const input_load_podkast = useRef(null)
    const image_podkast = useRef(null)
    const audio_tag = useRef(null)
    const [namePodkast, setNamePodkast] = useState('')
    const [imgPodkast, setImgPodkast] = useState(null)
    const [duration, setDuration] = useState('')

    //трансформирую картинку для обложки
    function getBase64() {
        let file = image_podkast.current.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            setImgPodkast(reader.result)
        }
        reader.onerror = function (error) {
            console.log('Ошибка получения изображения: ', error)
        }
    }

    const emptyPodkast = (<FormLayoutGroup style={{textAlign:'center', margin:"32px 0"}}>
            <Title level="2" weight="heavy" style={{marginBottom:10}}>Загрузите Ваш подкаст</Title>
            <span className="add_topText">Выберите готовый аудиофайл из вашего<br /> телефона и добавьте его</span>
            <br />
            <Button mode="outline" style={{marginTop:24}} onClick={()=>{
                input_load_podkast.current.click()
            }}>Загрузить файл</Button>
        </FormLayoutGroup>)

    const podkastWithFile = (
        <React.Fragment>
            <div className="podkast_info">
                <Card className="podkast_info-card">
                    <Icon28PodcastOutline fill="#99A2AD" className="icon_podkast"/>
                </Card>
                <Text className="podkast_info-filename">{podkastFile && podkastFile.name}</Text>
                <span className="podkast_info-duration">{duration}</span>
            </div>
            <Text className="add_bottomText" style={{margin:"10px 0 18px", padding: "0 15px"}}>Вы можете добавить таймкоды и скорректировать подкаст в режиме редактирования</Text>
            <Button mode="outline" onClick={go} data-to="edit" size="xl">Редактировать аудиозапись</Button>
        </React.Fragment>
    )

    useEffect(()=>{
        console.log(podkastFile)
    },[podkastFile])

    return (
        <Panel id={id} className="add">
            <PanelHeader left={
                <PanelHeaderButton onClick={go} data-to={ROUTES.INTRO}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>} 
                </PanelHeaderButton>}
            >
                Новый подкаст
            </PanelHeader>
            <FormLayout>
                <FormLayoutGroup style={{display:"flex"}}>
                    <input type="file" className="hidden" ref={image_podkast} onInput={()=>getBase64()}/>

                    <CardGrid style={{maxWidth: 115}}>
                    {imgPodkast
                        ? <img src={imgPodkast} width="72" height="72" className="imgPodkast" alt="image podkast"/>
                        : 
                        <Card className="add_img" onClick={()=>image_podkast.current.click()}>
                            <Icon56GalleryOutline width="25" height="25" fill="#3F8AE0" />
                        </Card>
                    }
                    </CardGrid>

                    <FormLayoutGroup top="Название" bottom="название" style={{width: '100%', marginTop:0}} >
                        <span className="add_topText">Название</span>
                        <Input type="text" style={{width: "100%"}} bottom="ass" placeholder="Введите название подкаста" top="Название" value={namePodkast} onChange={(e) => setNamePodkast(e.target.value)}/>
                    </FormLayoutGroup>
                </FormLayoutGroup>

                <Textarea top="Описание подкаста" />

                <input type="file" className="hidden" ref={input_load_podkast} 
                    onInput={()=> setPodkastFile(input_load_podkast.current.files[0]) }
                    onChange={() => {
                        audio_tag.current.src = URL.createObjectURL(input_load_podkast.current.files[0]) 
                    }}/>
                <audio className="hidden" ref={audio_tag} 
                    onCanPlayThrough={(e) => { //узнаем длительность
                        let sec = ~~(e.currentTarget.duration)
                        localStorage.setItem('duration', sec)
                        let minuts = ~~(sec/60)
                        sec = ~~(sec%60)
                        setDuration(`${minuts}:${sec}`)
                    }
                }/>
                
                {podkastFile ? podkastWithFile : emptyPodkast}
                
                <Separator />
                <Checkbox>Ненормативный контент</Checkbox>
                <Checkbox>Исключить эпизод из экспорта</Checkbox>
                <Checkbox>Трейлер подкаста</Checkbox>

                <Div>
                    <Header aside={<Icon16Chevron style={{position:'relative',top:10}} fill="#B8C1CC"/>} style={{padding:0}} >
                        <Title level="3" weight="regular">Кому доступен данный подкаст</Title>
                        <span className="add_textDescr" style={{marginLeft:0}}>Всем пользователям</span>
                    </Header>
                    <Text className="add_bottomText" >При публикации записи с эпизодом, он становится доступным для всех пользователей</Text>
                </Div>

                {podkastFile && namePodkast
                    ? <Button size="xl">Далее</Button>
                    : <Button disabled size="xl">Далее</Button>
                }

                {/* <Placeholder
                    style={{background:'#fff'}}
                    icon={<Icon28PodcastOutline />}
                    action={<Button size="l" mode="tertiary">Показать все сообщения</Button>}
                    stretched
                >
                    Нет непрочитанных<br />сообщений
                </Placeholder> */}
            </FormLayout>

        </Panel>
    );
};

export default Add;