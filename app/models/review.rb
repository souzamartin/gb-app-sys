class Review < ApplicationRecord
  belongs_to :user

  validates_presence_of :rating, :content
  validates :rating, numericality: {in: 0..5, only_integer: true}
end