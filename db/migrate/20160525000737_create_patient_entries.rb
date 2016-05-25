class CreatePatientEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :patient_entries do |t|
      t.belongs_to :entry, index: true
      t.belongs_to :graph, index: true
      t.timestamps
    end
  end
end
