import { connect } from "react-redux";
import ArtShow from "./art_show";
import { fetchArt } from "../../actions/art_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { uiToggleSignin } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  art: state.entities.arts[ownProps.match.params.artId],
  // comments: state.entities.comments,
  // likes: state.entities.likes,
  currentUser: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  fetchArt: artId => dispatch(fetchArt(artId)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtShow);