class CreateCaregivers < ActiveRecord::Migration[5.0]
  def change
    create_table :caregivers do |t|
      t.references :user
      t.references :care_team
      t.timestamps
    end
  end
end
