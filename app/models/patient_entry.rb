class PatientEntry < ApplicationRecord
  belongs_to :graph
  belongs_to :entry
end
