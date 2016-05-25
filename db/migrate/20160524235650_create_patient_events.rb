class CreatePatientEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :patient_events do |t|
      t.belongs_to :intervention, index: true
      t.belongs_to :graph, index: true
      t.timestamps
    end
  end
end
