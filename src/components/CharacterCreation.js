import React, { Component } from "react";
import "../css/charactercreation.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {getRaceDescription, getProfDescription} from "../tempData";


class CharacterCreation extends Component {
    constructor(){
        super()
        this.state={
            name: "Player",
            race: "human",
            gender: "male",
            stats:{str: 1, end: 1, per: 1, soc:1, dex:1, int:1},
            prof: "assassin",
            str: 1,
            mag: 1,
            soc: 1,
            points: 36
        }
        this.setRace = this.setRace.bind(this)
        this.setProfession = this.setProfession.bind(this)
    }

    setRace(race){
        this.setState({
            race: race
        })
    }

    handleRaceChange=(changeEvent)=>{
        this.setState({
            race: changeEvent.target.value
        })
    };

    setProfession(prof){
        this.setState({
            prof: prof
        })
    }

    handleProfChange=(changeEvent)=>{
        this.setState({
            prof: changeEvent.target.value
        })
    };

    decPoints=()=>{
        if(this.state.points > 0){
            this.setState({
                points: --this.state.points
            })
        }
    }

    incPoints=()=>{
        if(this.state.points < 30){
            this.setState({
                points: ++this.state.points
            })
        }
    }

    incrementStat=(e)=>{
        let statName = e.target.parentElement.id
        let stat = this.state.stats[statName];
        console.log(stat)
        ++stat;
        if(stat <= 20 && this.state.points !== 0){
            this.setState(prevState=>({
                stats: {
                    ...prevState.stats,
                    [statName]: stat
                }
            }))
            this.decPoints()
        }

    }

    decrementStat=(e)=>{
        let statName = e.target.parentElement.id
        let stat = this.state.stats[statName];
        --stat;
        if(stat >= 1){
            this.setState(prevState =>({
                stats: {
                    ...prevState.stats,
                    [statName]: stat
                }
            }))
            this.incPoints()
        }
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path={"/creation/race"}>
                        <div>
                        <h2>Select Race:</h2>
                            <p className={"race-description"}>
                                {getRaceDescription(this.state.race)}
                            </p>
                        <input id={"human"} type={"checkbox"} className={""} name={"race"}
                               checked={this.state.race === "human"} onChange={this.handleRaceChange} value={"human"}/>
                        <label htmlFor="human" className={"top-label"}>Human<img className={"race-image"} src={""}
                                                                                 alt={""}/></label>
                        <input id={"elf"} type={"checkbox"} className={""} name={"race"}
                               checked={this.state.race === "elf"} onChange={this.handleRaceChange} value={"elf"}/>
                        <label htmlFor="elf" className={"top-label"}>Elf<img className={"race-image"} src={""}
                                                                             alt={""}/></label>

                        <input id={"dwarf"} type={"checkbox"} className={""} name={"race"}
                               checked={this.state.race === "dwarf"} onChange={this.handleRaceChange} value={"dwarf"}/>
                        <label htmlFor="dwarf" className={"top-label"}>Dwarf<img className={"race-image"} src={""}
                                                                                 alt={""}/></label>

                        <input id={"orc"} type={"checkbox"} className={""} name={"race"}
                               checked={this.state.race === "orc"} onChange={this.handleRaceChange} value={"orc"}/>
                        <label htmlFor="orc" className={"top-label"}>Orc<img className={"race-image"}
                                                                             src={""}
                                                                             alt={""}/></label>

                            <div>
                            <Link to={"/creation/stats"}>Next</Link>
                            </div>
                        </div>
                    </Route>
                    <Route path={"/creation/stats"}>
                        <h2>Select Your Stats:</h2>
                        Points to spend: {this.state.points}
                        <div className={"stats-div"}>
                            <div>
                                <h3>STR</h3>
                                <p></p>
                                <label className={"stats-label"} id={"str"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.str}</div><button onClick={this.decrementStat}>-</button></label>
                                <h3>END</h3>
                                <label className={"stats-label"} id={"end"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.end}</div><button onClick={this.decrementStat}>-</button></label>
                                <h3>PER</h3>
                                <label className={"stats-label"} id={"per"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.per}</div><button onClick={this.decrementStat}>-</button></label>
                            </div>

                            <div>
                                <h3>SOC</h3>
                                <label className={"stats-label"} id={"soc"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.soc}</div><button onClick={this.decrementStat}>-</button></label>
                                <h3>DEX</h3>
                                <label className={"stats-label"} id={"dex"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.dex}</div><button onClick={this.decrementStat}>-</button></label>
                                <h3>INT</h3>
                                <label className={"stats-label"} id={"int"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.int}</div><button onClick={this.decrementStat}>-</button></label>
                            </div>
                        </div>
                        <Link to={"/creation/professions"}>Next</Link>
                    </Route>
                    <Route path={"/creation/professions"}>
                        <h2>Select Your Profession:</h2>
                        {getProfDescription(this.state.prof)}
                        <div className={"stats-div"}>
                            <div className={"column"}>
                                <h3>Rogue Types</h3>
                                <label>Assassin<input type={"checkbox"} checked={this.state.prof === "assassin"} onChange={this.handleProfChange} name={"prof"} value={"assassin"}/></label>
                                <label>Thief<input type={"checkbox"} checked={this.state.prof === "thief"} onChange={this.handleProfChange} name={"prof"} value={"thief"}/></label>
                                <h3>Mage Types</h3>
                                <label>Sorcerer<input type={"checkbox"} checked={this.state.prof === "sorcerer"} onChange={this.handleProfChange} name={"prof"} value={"sorcerer"}/></label>
                                <h3>Cleric Types</h3>
                                <label>Priest<input type={"checkbox"} checked={this.state.prof === "priest"} onChange={this.handleProfChange} name={"prof"} value={"priest"}/></label>

                            </div>
                            <div className={"column"}>
                                <h3>Fighter Types</h3>
                                <label>Gladiator<input type={"checkbox"} checked={this.state.prof === "gladiator"} onChange={this.handleProfChange} name={"prof"} value={"gladiator"}/></label>
                                <label>Knight<input type={"checkbox"} checked={this.state.prof === "knight"} onChange={this.handleProfChange} name={"prof"} value={"knight"}/></label>
                                <h3>Paladin Types</h3>
                                <label>Vanquisher<input type={"checkbox"} checked={this.state.prof === "vanquisher"} onChange={this.handleProfChange} name={"prof"} value={"vanquisher"}/></label>
                                <label>Justician<input type={"checkbox"} checked={this.state.prof === "justician"} onChange={this.handleProfChange} name={"prof"} value={"justician"}/></label>
                                <h3>Primal Types</h3>
                                <label>Druid<input type={"checkbox"} checked={this.state.prof === "druid"} onChange={this.handleProfChange} name={"prof"} value={"druid"}/></label>
                                <label>Hunter<input type={"checkbox"} checked={this.state.prof === "hunter"} onChange={this.handleProfChange} name={"prof"} value={"hunter"}/></label>
                            </div>


                        </div>
                        <Link to={"/"}>Done</Link>
                    </Route>
                    <Route path={"/creation"}>
                        <Link to={"/creation/race"}>Start</Link>
                    </Route>

                </Switch>
                {/*
            <div>
                <h2>Select Race:</h2>
                <input id={"human"} type={"checkbox"} className={""} name={"race"}
                       checked={this.state.race === "human"} onChange={this.handleRaceChange} value={"human"}/>
                <label htmlFor="human" className={"top-label"}>Human<img className={"race-image"} src={""}
                                                                         alt={""}/></label>
                <input id={"elf"} type={"checkbox"} className={""} name={"race"}
                       checked={this.state.race === "elf"} onChange={this.handleRaceChange} value={"elf"}/>
                       <label htmlFor="elf" className={"top-label"}>Elf<img className={"race-image"} src={""}
                                                                     alt={""}/></label>

                <input id={"dwarf"} type={"checkbox"} className={""} name={"race"}
                       checked={this.state.race === "dwarf"} onChange={this.handleRaceChange} value={"dwarf"}/>
                <label htmlFor="dwarf" className={"top-label"}>Dwarf<img className={"race-image"} src={""}
                                                                         alt={""}/></label>

                <input id={"orc"} type={"checkbox"} className={""} name={"race"}
                       checked={this.state.race === "orc"} onChange={this.handleRaceChange} value={"orc"}/>
                <label htmlFor="orc" className={"top-label"}>Orc<img className={"race-image"}
                                                                     src={""}
                                                                     alt={""}/></label>

            </div>
                <div>
                    <h2>Select Your Stats:</h2>
                    Points to spend: {this.state.points}
                    <div className={"stats-div"}>
                        <div>
                            <h3>STR</h3>
                            <label className={"stats-label"} id={"str"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.str}</div><button onClick={this.decrementStat}>-</button></label>
                            <h3>END</h3>
                            <label className={"stats-label"} id={"end"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.end}</div><button onClick={this.decrementStat}>-</button></label>
                            <h3>PER</h3>
                            <label className={"stats-label"} id={"per"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.per}</div><button onClick={this.decrementStat}>-</button></label>
                        </div>

                        <div>
                            <h3>SOC</h3>
                            <label className={"stats-label"} id={"soc"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.soc}</div><button onClick={this.decrementStat}>-</button></label>
                            <h3>DEX</h3>
                            <label className={"stats-label"} id={"dex"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.dex}</div><button onClick={this.decrementStat}>-</button></label>
                            <h3>INT</h3>
                            <label className={"stats-label"} id={"int"}><button  onClick={this.incrementStat}>+</button><div className={"stat-space"}>{this.state.stats.int}</div><button onClick={this.decrementStat}>-</button></label>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Select Your Profession:</h2>
                    <div className={"stats-div"}>
                        <div className={"column"}>
                            <h3>Rogue Types</h3>
                            <label>Assassin<input type={"checkbox"} checked={this.state.prof === "assassin"} onChange={this.handleProfChange} name={"prof"} value={"assassin"}/></label>
                            <label>Thief<input type={"checkbox"} checked={this.state.prof === "thief"} onChange={this.handleProfChange} name={"prof"} value={"thief"}/></label>
                            <label>Cutthroat<input type={"checkbox"} checked={this.state.prof === "cutthroat"} onChange={this.handleProfChange} name={"prof"} value={"cutthroat"}/></label>
                            <h3>Mage Types</h3>
                            <label>Sorcerer<input type={"checkbox"} checked={this.state.prof === "sorcerer"} onChange={this.handleProfChange} name={"prof"} value={"sorcerer"}/></label>
                            <h3>Cleric Types</h3>
                            <label>Priest<input type={"checkbox"} checked={this.state.prof === "priest"} onChange={this.handleProfChange} name={"prof"} value={"priest"}/></label>

                        </div>
                        <div className={"column"}>
                            <h3>Fighter Types</h3>
                            <label>Gladiator<input type={"checkbox"} checked={this.state.prof === "gladiator"} onChange={this.handleProfChange} name={"prof"} value={"gladiator"}/></label>
                            <label>Knight<input type={"checkbox"} checked={this.state.prof === "knight"} onChange={this.handleProfChange} name={"prof"} value={"knight"}/></label>
                            <h3>Paladin Types</h3>
                            <label>Vanquisher<input type={"checkbox"} checked={this.state.prof === "vanquisher"} onChange={this.handleProfChange} name={"prof"} value={"vanquisher"}/></label>
                            <label>Justician<input type={"checkbox"} checked={this.state.prof === "justician"} onChange={this.handleProfChange} name={"prof"} value={"justician"}/></label>
                            <h3>Primal Types</h3>
                            <label>Druid<input type={"checkbox"} checked={this.state.prof === "druid"} onChange={this.handleProfChange} name={"prof"} value={"druid"}/></label>
                            <label>Hunter<input type={"checkbox"} checked={this.state.prof === "hunter"} onChange={this.handleProfChange} name={"prof"} value={"hunter"}/></label>
                        </div>


                    </div>
                </div>

                */}


                {/*
                <div>
                    <h2>Select Stats:</h2>
                    Points to spend: {this.state.points}
                    <h3>STR</h3>
                    <label id={"str"}><button name={"str"} onClick={this.incrementStat}>+</button>{this.state.str}<button onClick={this.decrementStat}>-</button></label>
                    <h3>MAG</h3>
                    <label id={"mag"}><button name={"mag"} onClick={this.incrementStat}>+</button>{this.state.mag}<button onClick={this.decrementStat}>-</button></label>
                    <h3>SOC</h3>
                    <label id={"soc"}><button name={"soc"} onClick={this.incrementStat}>+</button>{this.state.soc}<button onClick={this.decrementStat}>-</button></label>
                </div>
                */}




            </div>
        )
    }
}

export default CharacterCreation