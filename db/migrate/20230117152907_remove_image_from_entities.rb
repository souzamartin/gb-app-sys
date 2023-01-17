class RemoveImageFromEntities < ActiveRecord::Migration[7.0]
  def change
    remove_column :entities, :image, :string
  end
end
