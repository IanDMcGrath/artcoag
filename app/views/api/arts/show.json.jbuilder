json.set! @art.id do
  json.extract! @art, :id, :artist_id, :title, :description, :created_at
  # json.likes @art.likes.count
  json.artpanels @art.artpanels.map { |file| url_for(file) }
  json.set! :artist do
    json.extract! @art.artist, :id, :username, :work
    if @art.artist.avatar
      json.avatar [url_for(@art.artist.avatar.avatar_img)]
    else
      json.avatar "https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png"
    end
  end
end

json.comments do
  @art.comments.includes(:replies, :likes).each do |comment|
    if comment.parent_id
      json.replies do
        json.set! comment.id do
          json.partial! '/api/comments/comment', comment: comment
          json.likes comment.likes.count
          json.replies do
            comment.replies.each do |reply|
              json.set! reply.id do
                json.extract! reply, :id
              end
            end
          end
        end
      end
    else
      json.root_comments do
        json.set! comment.id do
          json.partial! '/api/comments/comment', comment: comment
          json.likes comment.likes.count
          json.replies do
            comment.replies.each do |reply|
              json.set! reply.id do
                json.extract! reply, :id
              end
            end
          end
        end
      end
    end
  end
end



json.commenters do
  @art.commenters.each do |commenter|
    json.set! commenter.id do
      json.extract! commenter, :id, :username, :work
      if commenter.avatar
        json.avatar [url_for(commenter.avatar.avatar_img)]
      else
        json.avatar "https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png"
      end
    end
  end
end

if logged_in?
  json.likes do
    json.art_likes do
      @art.likes.where(liker_id: current_user.id).each do |like|
        json.set! like.likeable_id do
          json.partial! '/api/likes/like', like: like
        end
      end
    end
    json.comment_likes do
      @art.comments_likes.where(liker_id: current_user.id).each do |like|
        json.set! like.likeable_id do
          json.partial! '/api/likes/like', like: like
        end
      end
    end
  end
end

# json.set! :tags do
#   json.set! :medium do
#     @art.mediums.each do |medium|
#       json.set! medium.id do
#         json.extract! medium, :id, :name
#       end
#     end
#   end
#   json.set! :subject_matter do
#     @art.subject_matters.each do |subject_matter|
#       json.set! subject_matter.id do
#         json.extract! subject_matter, :id, :name
#       end
#     end
#   end
# end

json.set! :tags do
  @art.taggings.includes(:tag).each do |tagging|
    if tagging.tag.category == "Subject Matter"
      json.set! :subject_matter do
        json.set! tagging.tag.id do
          json.extract! tagging.tag, :id, :name
          json.tagging_id tagging.id
        end
      end
    else
      json.set! :medium do
        json.set! tagging.tag.id do
          json.extract! tagging.tag, :id, :name
          json.tagging_id tagging.id
        end
      end
    end
  end
end


# json.likers do
#   @art.likers.each do |liker|
#     json.set! liker.id do
#       json.extract! liker, :id, :username, :work
#     end
#   end
# end