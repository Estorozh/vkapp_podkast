import React from "react";
import { PanelHeader, Button, Panel } from "@vkontakte/vkui";
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';
import "./style.css";

const Intro = ({id, go}) => {
    return (
        <Panel id={id} className="intro" centered={true}>
            <PanelHeader>Подкасты</PanelHeader>
            <Icon56AddCircleOutline fill="#99A2AD"/>
            <h1 className="podkast_title">Добавьте первый подкаст</h1>
            <span className="podkast_text">
                Добавляйте, редактируйте и делитесь 
                <br /> 
                подкастами вашего сообщества.
            </span>
            <Button onClick={go} style={{marginTop:24}} data-to="add">Добавить подкаст</Button>
        </Panel>
    );
};

export default Intro;