import React from 'react';

class Paragrafo extends React.Component {
	render() {
		return (
			<p>{this.props.conteudo}</p>
		)
	}
}

module.exports = {Paragrafo}