class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :content
  has_one :user, serializer: AssocUserSerializer
end