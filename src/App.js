import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Intro from './panels/Intro/Intro';

import { ROUTES } from './const';
import Add from './panels/Add/Add';
import Edit from './panels/Edit/Edit';

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO); //INTRO
	const [fetchedUser, setUser] = useState(null);
    const [podkastFile,setPodkastFile] = useState(null)
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	//fetchedUser - все данные пользователя
	return (
		<View activePanel={activePanel} popout={popout}>
			<Intro id={ROUTES.INTRO} go={go} />
			<Add id={ROUTES.ADD} go={go} podkastFile={podkastFile} setPodkastFile={setPodkastFile} />
			<Edit id={ROUTES.EDIT} go={go} podkastFile={podkastFile} setPodkastFile={setPodkastFile} />
		</View>
	);
}

export default App;

