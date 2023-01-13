class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :location
      t.string :notes, default: "None"
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
