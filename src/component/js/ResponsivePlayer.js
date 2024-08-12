import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/ReactPlayer.css';
import axios from 'axios';

const server = 'https://3tx8axi5ie.execute-api.ap-northeast-1.amazonaws.com/count_watched'

class ResponsivePlayer extends Component {
	    onStart = () => {
		            console.log('onStart')

		            let params = new URLSearchParams();
		            params.append('target', this.props.src);
		            axios.post(server, params)
		            .then((res) => {
				                console.log(res)
				            })
		            .catch((error) => {
				                console.log(error)
				            });
		        }

	    render() {
		            return (
				                <div className='player-wrapper'>
				                    <ReactPlayer
				                        url={this.props.src}
				                        className='react-player'
				                        controls
				                        width='100%'
				                        height='100%'
				                        onStart={this.onStart}
				                    />
				                </div>
				            )
		        }
}

export default ResponsivePlayer;
