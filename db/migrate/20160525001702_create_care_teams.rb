class CreateCareTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :care_teams do |t|
      t.string :name
      t.timestamps
    end
  end
end
