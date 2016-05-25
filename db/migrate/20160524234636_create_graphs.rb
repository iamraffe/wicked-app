class CreateGraphs < ActiveRecord::Migration[5.0]
  def change
    create_table :graphs do |t|
      t.string :type
      t.boolean :approved, default: false
      t.references :user, index: true, :null => true
      t.string :status, default: 'building'
      t.timestamps
    end
  end
end
