import New from "./New";
import Popular from "./Popular";
import Video from "./Video";
import Article from "./Article";

const wrapperPrepare = (Component) => {
  function Wrapper(props) {
    const count = props.views;
    if(count < 100)
    {
      return <New><Component {...props} /></New>
    } else if(count >= 1000) {
      return <Popular><Component {...props} /></Popular>
    } else {
      return <Component {...props} />
    }
  }
  return Wrapper
}

const VideoWithWrapper = wrapperPrepare(Video);
const ArticleWithWrapper = wrapperPrepare(Article);

export default function List(props) {
  return props.list.map(item => {
      switch (item.type) {
          case 'video':
              return (
                  <VideoWithWrapper {...item} />
              );

          case 'article':
              return (
                  <ArticleWithWrapper {...item} />
              );
      }
  });
};