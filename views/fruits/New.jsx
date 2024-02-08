const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Fruit Page</h1>
            <a href='/fruits'>Go back to Index page</a>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" value="Create Fruit" />
            </form>
        </div>
    )
}

module.exports = New