import './Card.css'

// used to extract some dupe code from expenseItem to make a more generic card component
// card is a wrapper
function Card (props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div> // value of children will be bewteen the opening and closing tag
}

export default Card;