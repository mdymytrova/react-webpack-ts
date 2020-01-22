import * as React from 'react';

interface IAppProps {
	name: string;
}
class App extends React.PureComponent<IAppProps, {}> {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

export default App;