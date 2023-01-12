class Job < ApplicationRecord
  validates :location, presence: true
  
  belongs_to :user
  has_many :job_entities, dependent: :destroy
  has_many :entities, through: :job_entities
end
