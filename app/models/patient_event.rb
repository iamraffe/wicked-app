class PatientEvent < ApplicationRecord
  belongs_to :graph, optional: true
  belongs_to :intervention, optional: true
end
