class Entry < ApplicationRecord
  belongs_to :patient, class_name: "User"
  has_many :patient_entries
  has_many :graphs, through: :patient_entries
end
