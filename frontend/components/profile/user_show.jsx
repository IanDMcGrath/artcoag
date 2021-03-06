import React from 'react';
import { withRouter } from 'react-router';
import ArtIndexItemContainer from "../art/art_index_item_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasFetchedArts: false, hasFetchedUser: false };
  }

  componentDidMount() {
    // console.log('COMPONENT DID MOUNT!!!!!!!!!!')
    if (!this.props.user || !this.props.user.avatar) {
      this.props.fetchUser(this.props.match.params.userId);
      this.setState({hasFetchedUser: true, hasFetchedArts: false});
      return;
    }
    this.props.fetchUserArts(this.props.user.id);
    this.setState({ hasFetchedArts: true });
    return;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.user && !this.state.hasFetchedUser) {
      this.props.fetchUser(this.props.match.params.userId);
      this.setState({hasFetchedUser: true, hasFetchedArts: false});
      return;
    }
    if (prevProps.user && prevProps.user.id !== this.props.user.id) {
      console.log(`prevProps: ${prevProps.user.id} // props: ${this.props.user.id}`);
      this.props.fetchUserArts(this.props.user.id);
      // this.setState({ hasFetchedArts: true });
      // debugger;
      return;
    }
    if (this.props.user && !this.state.hasFetchedArts && this.state.hasFetchedUser) {
      if (!this.props.art) {
        this.props.fetchUserArts(this.props.user.id);
        this.setState({hasFetchedUser: false, hasFetchedArts: true});
        return;
      }
    }
  }

  render() {
    if (!this.props.user) { return null }
    if (!this.state.hasFetchedArts) { return null }
    const { user, arts } = this.props;
    let hasArts = Boolean(arts) && Boolean(Object.keys(arts).length > 0);
    console.log(this.props.match.params.userId);
    console.log(this.props.isOwner);
    return (
      <div className="user-show">
        <div className="user-show-header">
          <img className="user-show-background" src="https://artcoag-seeds.s3.us-west-1.amazonaws.com/banners/default_banner.png"/>
          <div className="user-show-details">
            <div className="user-show avatar-container" >
              <img className="user-show avatar" src={user.avatar ? user.avatar : "https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png"} />
            </div>
            <h3 className="username">{user.username}</h3>
            { this.props.isOwner ?
              <div className="link" onClick={() => this.props.history.push(`/users/${this.props.match.params.userId}/edit`)}>Edit profile</div>
            :
              null
            }
            <div className="user-profession">{user.summary}</div>
            <div className="user-location">{user.work}</div>
          </div>
        </div>
        <div className="art-index">
          {hasArts ?
            <div className="art-index-grid">
              {arts.map(art => <ArtIndexItemContainer key={art.id} art={art} />)}
            </div>
          : null}
        </div>
      </div>
    )
  }
}

export default withRouter(UserShow);