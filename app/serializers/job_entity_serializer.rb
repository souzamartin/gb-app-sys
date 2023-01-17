class JobEntitySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :name, :image

  def image
    if object.image.attached?
      rails_blob_url(object.image, only_path: true)
    end
  end
end
