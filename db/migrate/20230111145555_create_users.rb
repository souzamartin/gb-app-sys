class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :password_digest
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :phone
      t.string :address
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
