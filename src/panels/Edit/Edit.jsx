import React, { useState, useRef } from "react";
import { PanelHeader, Panel, PanelHeaderButton, CardGrid, Card, Group, CellButton, Header } from "@vkontakte/vkui";
import "./style.css";
import { ROUTES } from "../../const";
import {IconASC, IconDESC, IconCut, IconUndo} from './Icons'
import Icon48Play from '@vkontakte/icons/dist/48/play';
import Icon48Pause from '@vkontakte/icons/dist/48/pause';
import Icon24DismissSubstract from '@vkontakte/icons/dist/24/dismiss_substract';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon56MusicOutline from '@vkontakte/icons/dist/56/music_outline';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { platform, IOS } from '@vkontakte/vkui';
import ReactSlider from "react-slider";
const osName = platform();



const Edit = ({id, go, podkastFile}) => {
    const time = +localStorage.getItem('duration')
    const audio = useRef(null)
    const [isPlay, setIsPlay] = useState(false)
    const [sortASC, setSortASC] = useState(false)
    const [sortDESC, setSortDESC] = useState(false)

    return (
        <Panel id={id} className="edit">
            <PanelHeader left={
                <PanelHeaderButton onClick={go} data-to={ROUTES.ADD}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>} 
                </PanelHeaderButton>}
            >
                Редактирование
            </PanelHeader>
            
            <CardGrid style={{marginTop:26}}>
                <Card size="l" mode="outline">
                    <div className="track-line"></div>
                    <div className="wrap">
                        <div className="overlay" onClick={(e)=>{
                            e.target.classList.add('hidden')
                            document.querySelector('.horizontal-slider').classList.add('active')
                            document.querySelector('.controls-cut').classList.add('active')
                        }}></div>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[0, 100]}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={1}
                        />
                    </div>

                    <div className="controls">
                        {isPlay 
                            ? <Icon48Pause width='44' height='44' fill='#fff' className="icon iconPlayPause" onClick={()=>{audio.current.play(); setIsPlay(false)}}/>
                            : <Icon48Play width='44' height='44' fill='#fff' className="icon iconPlayPause" onClick={()=>{audio.current.play(); setIsPlay(true)}}/>
                        }
                        <div className="controls-cut">
                            <div className="icon-cut icon" >
                                <IconCut width="44" height="44" />
                            </div>
                            <div className="icon-undo icon">
                                <IconUndo width="44" height="44" />
                            </div>
                        </div>

                        <div className="controls-effect">
                            <Icon56MusicOutline width='44' height='44' fill="#3F8AE0" style={{background: "#F2F3F5"}} data-to={ROUTES.EFFECT} className="icon"/>
                            <div onClick={()=>{setSortDESC(false); setSortASC(true)}}>
                                <IconASC width="44" height="44" className="icon" bg={sortASC ? '#3F8AE0' : '#F2F3F5' } fill={sortASC ?  '#fff' : '#3F8AE0'}/>
                            </div>
                            <div onClick={()=>{setSortDESC(true); setSortASC(false)}}>
                                <IconDESC width="44" height="44" className="icon" bg={sortDESC ? '#3F8AE0' : '#F2F3F5' } fill={sortDESC ?  '#fff' : '#3F8AE0'}/>
                            </div>
                        </div>
                    </div>
                </Card>
            </CardGrid>

            <Group style={{marginTop: 10}} header={<Header mode="secondary">ТАЙМКОДЫ</Header>}>
                <CellButton before={<Icon24DismissSubstract style={{transform: 'rotate(45deg)'}} />}>Добавить таймкод</CellButton>
                <span className="timeCode-descript">Отметки времени с названием темы. Позволяют слушателям легче путешествовать по подкасту.</span>
            </Group>
        </Panel>
    );
};

export default Edit;