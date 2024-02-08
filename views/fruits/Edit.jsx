const React = require('react')

function Edit (props) {
    const { name, _id, readyToEat, color} = props.fruit
    return(
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/fruits'>Go back to Index page</a>
            <form action={`/fruits/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                color: <input type="text" name="color" defaultValue={color}/><br/>
                Is Ready To Eat: {readyToEat?<input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/>}<br/>
                <input type="submit" value="Update Fruit" />
            </form>
        </div>
    )
}

module.exports = Edit