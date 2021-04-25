import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => {
    return(

        <div>

            <Link to ='/'>HomePage</Link>{`  |  `}

            <Link to ='/wines'>All Wines</Link>{`  |  `}

            <Link to ='/create'>Create a New Wine!</Link>

        </div>

    )

}

export default NavBar
