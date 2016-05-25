class CreateGraphs < ActiveRecord::Migration[5.0]
  def change
    create_table :graphs do |t|
      t.string :type
      t.boolean :approved, default: false
      t.belongs_to :user, index: true
      t.string :status
      t.timestamps
    end
  end
end
