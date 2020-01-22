import * as React from 'react';
import { RandomBox } from './RandomBox';

interface IAppProps {
	name: string;
}
class App extends React.Component<IAppProps, {}> {
	render(): React.ReactNode {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<RandomBox />
			</div>
		);
	}
}

export default App;