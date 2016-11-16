import React, {Component} from 'react';

const ContentPrgrph = (props) => (
        <div>
            <h4>{props.content.title}</h4>
            <p>{props.content.body}</p>
        </div>
    )

ContentPrgrph.propTypes = {
    content : React.PropTypes.object.isRequired
}

ContentPrgrph.defaultProps = {
    content : {title:"Input title", body:"Input body."}
}

export default ContentPrgrph;