class CareTeam < ApplicationRecord
  has_many :caregivers
  has_many :users, through: :caregivers, dependent: :destroy
end
