class EntitySerializer < ActiveModel::Serializer
  attributes :id, :name, :classification, :description, :notes, :image
end
