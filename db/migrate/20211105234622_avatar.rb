class Avatar < ActiveRecord::Migration[5.2]
  def change
    create_table :avatars do |t|
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :avatars, :user_id
  end
end
