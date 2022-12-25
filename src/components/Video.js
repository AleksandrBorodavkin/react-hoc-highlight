export default function Video(props) {
    return (
        <div className="item item-video">
            <iframe title={props.type} src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};