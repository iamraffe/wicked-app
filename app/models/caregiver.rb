class Caregiver < ApplicationRecord
  belongs_to :user
  belongs_to :care_team
end
