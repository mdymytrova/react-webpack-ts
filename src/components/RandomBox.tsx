import * as React from 'react';

export class RandomBox extends React.Component {
    colors = ['teal', 'purple', 'orange', 'pink', 'blue'];
    
    render(): React.ReactNode {
        const boxStyle = { 
			backgroundColor: this.getRandomProperty(this.colors),
			fontSize: `${this.getRandomNumber(30, 16)}px`
		};
        return (
			<div className="box" style={boxStyle}>Random Box</div>
		);
    }
    
	getRandomProperty(values: string[]): string {
		return values[this.getRandomNumber(values.length)];
    }
    
    getRandomNumber(maxNumber: number, minNumber: number = 0): number {
        return Math.floor(Math.random() * maxNumber) + minNumber;
    }
}