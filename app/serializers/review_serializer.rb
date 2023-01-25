class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content, :created_at
  has_one :user, serializer: AssocUserSerializer
end