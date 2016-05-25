class CreateEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :entries do |t|
      t.string :symbol
      t.integer :value
      t.datetime :date
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
