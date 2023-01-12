class CreateJobEntities < ActiveRecord::Migration[7.0]
  def change
    create_table :job_entities do |t|
      t.belongs_to :job, null: false, foreign_key: true
      t.belongs_to :entity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
