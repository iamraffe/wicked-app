class Graph < ApplicationRecord
  # Interventions
  has_many :patient_events
  has_many :interventions, through: :patient_events do
    def <<(new_item)
      super( Array(new_item) - proxy_association.owner.interventions )
    end
  end
  validates :interventions, presence: true
  accepts_nested_attributes_for :interventions

  # Entries
  has_many :patient_entries
  has_many :entries, through: :patient_entries do
    def <<(new_item)
      super( Array(new_item) - proxy_association.owner.entries )
    end
  end
  validates :entries, presence: true
  accepts_nested_attributes_for :entries

  # Patient
  belongs_to :patient, class: "User"
  validates :patient, presence: true
  accepts_nested_attributes_for :patient


end
