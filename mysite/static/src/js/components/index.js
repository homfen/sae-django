var React = require('react');

module.exports = React.createClass({
	getInitialState:function(){
		return {now:window.temp}
	},
	render:function(){
		return (
			<div>
				<h1>Hello,this is Homfen on sae.</h1>
				<p>{this.state.now}</p>
			</div>
		)
	}
});
