import React, {Component} from 'react';
import Counter from './Components/Admin/Counter';

class Banner extends Component {
    render(){
        return(
            <div id="upperSection" class="container mt-4">
                <div class="card d-flex flex-row bg-secondary text-light" style="width: 69.3rem; height: 10rem;">
                    <div id="salesCounter" class="d-flex flex-col text-center">
                        <div id="soldCounter" class="col">
                            <h1 id="counterNumberSold" class="font-weight-bold">
                                <Counter />
                            </h1>
                            <h5 id="textLabel">sold</h5>
                        </div>
                        <div id="dayCounter" class="col">
                            <h1 id="counterNumberDays" class="font-weight-bold">
                                <Counter />
                            </h1>
                            <h5 id="textLabel">day left</h5>
                        </div>
                        <div id="hoursCounter" class="col">
                            <h1 id="counterNumberHours" class="font-weight-bold">
                                <Counter />
                            </h1>
                            <h5 id="textLabel">hours left</h5>
                        </div>
                        <div id="minutesCounter" class="col">
                            <h1 id="counterNumberMinutes" class="font-weight-bold">
                                <Counter />
                            </h1>
                            <h5 id="textLabel">minutes left</h5>
                        </div>
                        <div id="secondsCounter" class="col">
                            <h1 id="counterNumberSeconds" class="font-weight-bold">
                                <Counter />
                            </h1>
                            <h5 id="textLabel">seconds left</h5>
                        </div>
                    </div>

                    <input type="hidden" id="totalSeconds" value="{{totalSeconds}}" />

                    <div id="userMenuIcon">
                        <img id="logoImageGrey" src="photo/logo-grey.png" />
                    </div>

                    <div id="userMenu" class="d-flex flex-col text-left">
                        <div id="userIcon" class="col">
                            <img id="userIconImage" src="../photo/icon-user.png" />
                        </div>
                        <div id="userNameandArrow" class="d-flex flex-col justify-content-left">
                            <div class="nav-item dropdown">
                                <a id="userMenuDropdown" class="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    User
                                </a>
                                <div class="dropdown-menu dropdown-menu-right mt-4" aria-labelledby="userMenuDropdown">
                                    <a class="dropdown-item" href="/logout">Log out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;