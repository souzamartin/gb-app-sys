class JobSerializer < ActiveModel::Serializer
  attributes :id, :location, :notes, :active
  has_one :user, serializer: JobUserSerializer
  has_many :entities, serializer: JobEntitySerializer
end