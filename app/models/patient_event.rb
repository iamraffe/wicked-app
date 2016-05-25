class PatientEvent < ApplicationRecord
  belongs_to :graph
  belongs_to :intervention
end
