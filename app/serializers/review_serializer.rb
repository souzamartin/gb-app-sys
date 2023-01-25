class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content
  has_one :user, serializer: AssocUserSerializer
end