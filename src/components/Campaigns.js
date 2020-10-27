import React, { Component, useState } from "react";
import "../css/campaigns.css"
import {getCampaigns} from "../tempData";

function CampaignBox(props) {

    function showModal() {
        props.showModal(props.name,props.description)
    }

    return (
        <div className={"campaign-box"} onClick={showModal}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/c/cc/Fantasy_icon.svg"}/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

class Campaigns extends Component {
    constructor(){
        super()
        this.state={
            show: false,
            campaignName: "",
            campaignDescription: "",
        }
    }

    showModal=(name, description)=>{
        this.setState({
            show: true,
            campaignName: name,
            campaignDescription: description
        })
    }

    closeModal=()=>{
        this.setState({
            show: false,
            campaignName: "",
            campaignDescription: ""
        })
    }

    render(){

        let campaigns = [];
        let campaignData = getCampaigns();
        let modalBackground;
        let modal;
        for(let i = 0; i < campaignData.length; i++){
            let currentCampaign = campaignData[i];
            campaigns.push(
                <CampaignBox name={currentCampaign.name} description={currentCampaign.description} showModal={this.showModal}/>

            )
        }
        if(this.state.show){
            modalBackground = <div className={"campaign-modal"} onClick={this.closeModal}> </div>
            modal=<div className={"campaign-modal-content"}>
                <h2>{this.state.campaignName}</h2>
                <p>{this.state.campaignDescription}</p>
                <button>PLAY</button>
            </div>
        }

        return(
            <div className={"campaigns-main"}>
                {campaigns}
                {modalBackground}
                {modal}
            </div>
        )
    }
}

export default Campaigns