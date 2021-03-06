import { connect } from "react-redux";
import ArtShow from "./art_show";
import { fetchArt } from "../../actions/art_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { uiToggleSignin } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  art: state.entities.arts[ownProps.match.params.artId],
  comments: state.entities.comments.rootComments,
  likes: state.entities.likes,
  currentUser: state.session.id,
  isOwner: Boolean(state.session.id === (state.entities.arts[ownProps.match.params.artId] ? state.entities.arts[ownProps.match.params.artId].artistId : null))
});

const mapDispatchToProps = dispatch => ({
  fetchArt: artId => dispatch(fetchArt(artId)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtShow);