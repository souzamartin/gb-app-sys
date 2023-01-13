class CreateEntities < ActiveRecord::Migration[7.0]
  def change
    create_table :entities do |t|
      t.string :name
      t.string :classification, default: "Unknown"
      t.string :description
      t.text :notes, default: "None"
      t.string :image
      t.boolean :busted, default: false

      t.timestamps
    end
  end
end
