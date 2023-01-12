class EntitySerializer < ActiveModel::Serializer
  attributes :name, :classification, :description, :notes, :image, :busted
end
