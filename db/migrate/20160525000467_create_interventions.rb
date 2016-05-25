class CreateInterventions < ActiveRecord::Migration[5.0]
  def change
    create_table :interventions do |t|
      t.string :title
      t.datetime :start
      t.datetime :end
      t.string :description
      t.integer :index
      t.string :type
      t.string :chart_type
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
